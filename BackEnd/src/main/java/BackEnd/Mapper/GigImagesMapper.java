package BackEnd.Mapper;

import BackEnd.DTO.GigImagesDTO;
import BackEnd.entity.GigImages;

public class GigImagesMapper {

    public static GigImagesDTO mapTogigImagesDTO(GigImages gigImages){
        return new GigImagesDTO(
                gigImages.getGigImageId(),
                gigImages.getGigImageUrl()
        );
    }

    public static GigImages mapToGigImages(GigImagesDTO gigImagesDto){
        return new GigImages(
                gigImagesDto.getGigImageId(),
                gigImagesDto.getGigImageUrl()
        );
    }
}
