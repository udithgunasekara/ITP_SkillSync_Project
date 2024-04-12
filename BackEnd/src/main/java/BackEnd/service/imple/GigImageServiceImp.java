package BackEnd.service.imple;

import BackEnd.DTO.GigImagesDTO;
import BackEnd.Mapper.GigImagesMapper;
import BackEnd.entity.FreelancerGigs;
import BackEnd.entity.GigImages;
import BackEnd.repository.FreelancerGigsRepo;
import BackEnd.repository.GigImageRepo;
import BackEnd.service.GigImageService;
import jakarta.servlet.ServletContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class GigImageServiceImp implements GigImageService {
    private static final String UPLOAD_DIR = "/Users/drldasanayake/ITP_SkillSync/FrontEnd/react-frontend/public/GigImages/";

    private final GigImageRepo gigImageRepo;
    private final FreelancerGigsRepo freelancerGigsRepository;
    private final ServletContext servletContext;

    @Autowired
    public GigImageServiceImp(GigImageRepo gigImageRepo, FreelancerGigsRepo freelancerGigsRepository, ServletContext servletContext) {
        this.gigImageRepo = gigImageRepo;
        this.freelancerGigsRepository = freelancerGigsRepository;
        this.servletContext = servletContext;
    }

    public void uploadImages(MultipartFile file, Long gigId) throws IOException {
        if (!file.isEmpty()) {
            try {
                byte[] bytes = file.getBytes();
                String rootDir = servletContext.getRealPath("/");
                Path directory = Paths.get(UPLOAD_DIR + gigId);
                Files.createDirectories(directory);
                Path filePath = directory.resolve(Objects.requireNonNull(file.getOriginalFilename()));
                Files.write(filePath, bytes);

                // Fetch the FreelancerGigs object
                FreelancerGigs gig = freelancerGigsRepository.findById(gigId)
                        .orElseThrow(() -> new IllegalArgumentException("Gig not found"));

                // Save the image details to the database
                GigImages gigImages = new GigImages();
                gigImages.setGigImagePath(filePath.toString());
                gigImages.setGigId(gig); // Set the FreelancerGigs object
                gigImageRepo.save(gigImages);
            } catch (IOException e) {
                // Handle exception properly
                throw new IOException("Failed to upload image");
            }
        }
    }

    @Override
    public List<GigImagesDTO> getImagesByGigId(Long gigId) {
        List<GigImages> gigImagesList = gigImageRepo.findByGigId(gigId);
        return gigImagesList.stream()
                .map(GigImagesMapper::mapToGigImagesDTO)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteImagesByGigId(Long gigId) {
        List<GigImages> gigImagesList = gigImageRepo.findByGigId(gigId);
        gigImageRepo.deleteAll(gigImagesList);
    }


}
