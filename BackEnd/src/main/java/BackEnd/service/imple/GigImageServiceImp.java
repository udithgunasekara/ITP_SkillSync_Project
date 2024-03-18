package BackEnd.service.imple;

import BackEnd.DTO.GigImagesDTO;
import BackEnd.Exceptions.ResourceNotFound;
import BackEnd.Mapper.FreelancerGigMapper;
import BackEnd.Mapper.GigImagesMapper;
import BackEnd.entity.FreelancerGigs;
import BackEnd.entity.GigImages;
import BackEnd.repository.GigImageRepo;
import BackEnd.service.GigImageService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class GigImageServiceImp implements GigImageService {

    private final GigImageRepo gigImageRepo;
    @Override
    public GigImagesDTO createGigImage(GigImagesDTO gigImagesDto) {
        GigImages gigImages = GigImagesMapper.mapToGigImages(gigImagesDto);
        GigImages savedGigImage = gigImageRepo.save(gigImages);
        return GigImagesMapper.mapTogigImagesDTO(savedGigImage);
    }

    @Override
    public GigImagesDTO getGigImageById(long gigImageId) {
        GigImages gigImages = gigImageRepo.findById(gigImageId).
                orElseThrow(() -> new RuntimeException("Gig image not found"));
        return GigImagesMapper.mapTogigImagesDTO(gigImages);
    }

    @Override
    public List<GigImagesDTO> getAllGigImages() {
        List<GigImages> gigImages = gigImageRepo.findAll();
        return gigImages.stream().map(GigImagesMapper::mapTogigImagesDTO).
                collect(Collectors.toList());
    }

    @Override
    public GigImagesDTO updateGigImage(long gigImageId, GigImagesDTO updatedGigImage) {
        GigImages gigImages = gigImageRepo.findById(gigImageId).
                orElseThrow(() -> new ResourceNotFound("Gig image not found with id : " + gigImageId));

        gigImages.setGigImageUrl(updatedGigImage.getGigImageUrl());

        GigImages updatedGigImages = gigImageRepo.save(gigImages);
        return GigImagesMapper.mapTogigImagesDTO(updatedGigImages);
    }

    @Override
    public void deleteGigImage(long gigImageId) {
        GigImages gigImages = gigImageRepo.findById(gigImageId).
                orElseThrow(() -> new RuntimeException("Gig image not found with id : " + gigImageId));
        gigImageRepo.delete(gigImages);
    }
}
