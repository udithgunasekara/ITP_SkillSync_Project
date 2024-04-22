package BackEnd.Mapper;

import BackEnd.DTO.ImageEntityDTO;
import BackEnd.entity.ImageEntity;

public class ImageEntityMapper {
    public static ImageEntityDTO mapToImageEntityDTO(ImageEntity imageEntity){
        return new ImageEntityDTO(
                imageEntity.getUsername(),
                imageEntity.getImageName(),
                imageEntity.getImageData()
        );
    }

    public static ImageEntity mapToImageEntity(ImageEntityDTO imageEntityDTO){
        return new ImageEntity(
                imageEntityDTO.getUsername(),
                imageEntityDTO.getImageName(),
                imageEntityDTO.getImageData()
        );
    }

}