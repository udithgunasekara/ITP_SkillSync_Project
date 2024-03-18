package BackEnd.controller;

import BackEnd.service.GigImageService;
import BackEnd.DTO.GigImagesDTO;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@AllArgsConstructor
@RestController
@RequestMapping(path = "/gig-images")

public class GigImageController {

    private GigImageService gigImageService;

    //Build add gig image REST API
    @PostMapping
    public ResponseEntity<GigImagesDTO> createGigImage(@RequestBody GigImagesDTO gigImageDto) {
        GigImagesDTO savedGigImage = gigImageService.createGigImage(gigImageDto);
        return new ResponseEntity<>(savedGigImage, HttpStatus.CREATED);
    }

    //Build get gig image by id REST API
    @GetMapping("/{gigImageId}")
    public ResponseEntity<GigImagesDTO> getGigImageById(@PathVariable long gigImageId) {
        GigImagesDTO gigImageDto = gigImageService.getGigImageById(gigImageId);
        return new ResponseEntity<>(gigImageDto, HttpStatus.OK);
    }

    //Build get all gig images REST API
    @GetMapping
    public ResponseEntity<List<GigImagesDTO>> getAllGigImages() {
        List<GigImagesDTO> gigImageDto = gigImageService.getAllGigImages();
        return ResponseEntity.ok(gigImageDto);
    }

    //Build update gig image REST API
    @PutMapping("/{gigImageId}")
    public ResponseEntity<GigImagesDTO> updateGigImage(@PathVariable long gigImageId, @RequestBody GigImagesDTO updatedGigImage) {
        GigImagesDTO gigImageDto = gigImageService.updateGigImage(gigImageId, updatedGigImage);
        return ResponseEntity.ok(updatedGigImage);
    }

    //Build delete gig image REST API
    @DeleteMapping("/{gigImageId}")
    public ResponseEntity<?> deleteGigImage(@PathVariable long gigImageId) {
        gigImageService.deleteGigImage(gigImageId);
        return ResponseEntity.ok("Gig image deleted successfully!");
    }

}
