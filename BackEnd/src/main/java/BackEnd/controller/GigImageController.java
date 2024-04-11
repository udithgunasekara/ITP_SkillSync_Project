package BackEnd.controller;

import BackEnd.DTO.GigImagesDTO;
import BackEnd.service.GigImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/freelancer-gigs/{gigId}/gig-images")
@CrossOrigin(origins = "http://localhost:3000")
public class GigImageController {

    private final GigImageService gigImageService;

    @Autowired
    public GigImageController(GigImageService gigImageService) {
        this.gigImageService = gigImageService;
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadImages(@RequestParam("files") MultipartFile[] files, @PathVariable("gigId") Long gigId) {
        try {
            for (MultipartFile file : files) {
                gigImageService.uploadImages(file, gigId);
            }
            return ResponseEntity.ok("Images uploaded successfully");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload images");
        }
    }

    @GetMapping("/my-gig-images")
    public ResponseEntity<List<GigImagesDTO>> getImagesByGigId(@PathVariable("gigId") Long gigId) {
        List<GigImagesDTO> images = gigImageService.getImagesByGigId(gigId);
        if (images.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        images.forEach(image -> {
            image.setGigImagePath(image.getGigImagePath());
        });

        return ResponseEntity.ok(images);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteImagesByGigId(@PathVariable("gigId") Long gigId) {
        gigImageService.deleteImagesByGigId(gigId);
        return ResponseEntity.ok("Images deleted successfully");
    }

}
