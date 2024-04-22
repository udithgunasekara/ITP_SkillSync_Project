package BackEnd.service;

import BackEnd.DTO.GigImagesDTO;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

// ImageUploadService.java (Interface)
public interface GigImageService {
    void uploadImages(MultipartFile file, Long gigId) throws IOException;
    List<GigImagesDTO> getImagesByGigId(Long gigId);
    void deleteImagesByGigId(Long gigId);
}

