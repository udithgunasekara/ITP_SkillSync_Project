package BackEnd.Mapper;

import BackEnd.DTO.GigImagesDTO;
import BackEnd.entity.GigImages;

public class GigImagesMapper {

    public static GigImagesDTO mapToGigImagesDTO(GigImages gigImages) {
        return new GigImagesDTO(
                gigImages.getGigImageId(),
                gigImages.getGigImageData()
        );
    }

    public static GigImages mapToGigImages(GigImagesDTO gigImagesDto) {
        return new GigImages(
                gigImagesDto.getGigImageId(),
                gigImagesDto.getGigImageData()
        );
    }
}
