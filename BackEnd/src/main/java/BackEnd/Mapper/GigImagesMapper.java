package BackEnd.Mapper;

import BackEnd.DTO.GigImagesDTO;
import BackEnd.entity.GigImages;

public class GigImagesMapper {

    public static GigImagesDTO mapToGigImagesDTO(GigImages gigImages) {
        return new GigImagesDTO(
                gigImages.getGigImageId(),
                gigImages.getGigImageData(),
                gigImages.getGigId().getGigId()
        );
    }

    public static GigImages mapToGigImages(GigImagesDTO gigImagesDto) {
        GigImages gigImages = new GigImages();
        gigImages.setGigImageId(gigImagesDto.getGigImageId());
        gigImages.setGigImageData(gigImagesDto.getGigImageData());
        return gigImages;
    }
}
