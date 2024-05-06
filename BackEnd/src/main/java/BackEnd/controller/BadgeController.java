package BackEnd.controller;

import BackEnd.entity.Badge;
import BackEnd.entity.ImageEntity;
import BackEnd.service.BadgeService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping("/api/badge")
public class BadgeController {

    private BadgeService badgeService;

    @PostMapping("{id}")
    public ResponseEntity<String> uploadImage(
            @RequestParam("file") MultipartFile file,
            @PathVariable("id") Long examid) throws IOException {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("Please select a file to upload.");
        }

        Badge badge = new Badge();
        badge.setBadgeNAme(file.getOriginalFilename());
        badge.setBadge(file.getBytes());
        badge.setExamId(examid);

        badgeService.saveBadge(badge);

        return ResponseEntity.ok("Image uploaded successfully.");
    }
}
