package BackEnd.controller;

import BackEnd.DTO.FreelancerGigsDto;
import BackEnd.service.FreelancerGigService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(path = "/freelancer-gigs")
public class FreelancerGigsController {

    private FreelancerGigService freelancerGigService;

    //Build add freelancer gig REST API
    @PostMapping
    public ResponseEntity<FreelancerGigsDto> createGig(@RequestBody FreelancerGigsDto freelancerGigsDto) {
        FreelancerGigsDto savedFreelancerGig = freelancerGigService.createGig(freelancerGigsDto);
        return new ResponseEntity<>(savedFreelancerGig, HttpStatus.CREATED);
    }

    //Build get freelancer gig by id REST API
    @GetMapping("/{gigId}")
    public ResponseEntity<FreelancerGigsDto> getGigById(@PathVariable long gigId) {
        FreelancerGigsDto freelancerGigsDto = freelancerGigService.getGigById(gigId);
        return new ResponseEntity<>(freelancerGigsDto, HttpStatus.OK);
    }

    //Build get all freelancer gigs REST API
    @GetMapping
    public ResponseEntity<List<FreelancerGigsDto>> getAllGigs() {
        List<FreelancerGigsDto> freelancerGigsDto = freelancerGigService.getAllGigs();
        return ResponseEntity.ok(freelancerGigsDto);
    }

    //Build update freelancer gig REST API
    @PutMapping("/{gigId}")
    public ResponseEntity<FreelancerGigsDto> updateGig(@PathVariable long gigId, @RequestBody FreelancerGigsDto updatedFreelancerGig) {
        FreelancerGigsDto freelancerGigsDto = freelancerGigService.updateGig(gigId, updatedFreelancerGig);
        return ResponseEntity.ok(updatedFreelancerGig);
    }

    //Build delete freelancer gig REST API
    @DeleteMapping("/{gigId}")
    public ResponseEntity<?> deleteGig(@PathVariable long gigId) {
        freelancerGigService.deleteGig(gigId);
        return ResponseEntity.ok("Gig deleted successfully!");
    }
}
