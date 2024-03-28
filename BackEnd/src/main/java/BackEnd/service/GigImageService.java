package BackEnd.service;

import BackEnd.DTO.GigImagesDTO;

import java.util.List;

public interface GigImageService {
    GigImagesDTO createGigImage(GigImagesDTO gigImagesDto);
    GigImagesDTO getGigImageById(long gigImageId);
    List<GigImagesDTO> getAllGigImages();
    GigImagesDTO updateGigImage(long gigImageId, GigImagesDTO updatedGigImage);
    void deleteGigImage(long gigImageId);

}
