package BackEnd.service.imple;
import BackEnd.DTO.GigImagesDTO;
import BackEnd.Mapper.GigImagesMapper;
import BackEnd.entity.FreelancerGigs;
import BackEnd.entity.GigImages;
import BackEnd.repository.FreelancerGigsRepo;
import BackEnd.repository.GigImageRepo;
import BackEnd.service.GigImageService;
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
    private static final String UPLOAD_DIR = "/Users/drldasanayake/ITP_SkillSync_Project/BackEnd/src/main/resources/gigImages/";
    private static final String IMAGE_URL_PREFIX = "/gigImages/";

    private final GigImageRepo gigImageRepo;
    private final FreelancerGigsRepo freelancerGigsRepository;


    @Autowired
    public GigImageServiceImp(GigImageRepo gigImageRepo, FreelancerGigsRepo freelancerGigsRepository) {
        this.gigImageRepo = gigImageRepo;
        this.freelancerGigsRepository = freelancerGigsRepository;
    }

    public void uploadImages(MultipartFile file, Long gigId) throws IOException {
        if (!file.isEmpty()) {
            try {
                byte[] bytes = file.getBytes();
                Path directory = Paths.get(UPLOAD_DIR + gigId);
                Files.createDirectories(directory);
                Path filePath = directory.resolve(Objects.requireNonNull(file.getOriginalFilename()));
                Files.write(filePath, bytes);

                FreelancerGigs gig = freelancerGigsRepository.findById(gigId)
                        .orElseThrow(() -> new IllegalArgumentException("Gig not found"));

                GigImages gigImages = new GigImages();
                gigImages.setGigImagePath(filePath.toString());
                gigImages.setGigId(gig);
                gigImageRepo.save(gigImages);
            } catch (IOException e) {
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
