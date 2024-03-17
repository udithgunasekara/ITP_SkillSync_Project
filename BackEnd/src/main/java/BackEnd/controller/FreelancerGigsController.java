package BackEnd.controller;

import BackEnd.DTO.FreelancerGigsDTO;
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
    public ResponseEntity<FreelancerGigsDTO> createGig(@RequestBody FreelancerGigsDTO freelancerGigsDto) {
        FreelancerGigsDTO savedFreelancerGig = freelancerGigService.createGig(freelancerGigsDto);
        return new ResponseEntity<>(savedFreelancerGig, HttpStatus.CREATED);
    }

    //Build get freelancer gig by id REST API
    @GetMapping("/{gigId}")
    public ResponseEntity<FreelancerGigsDTO> getGigById(@PathVariable long gigId) {
        FreelancerGigsDTO freelancerGigsDto = freelancerGigService.getGigById(gigId);
        return new ResponseEntity<>(freelancerGigsDto, HttpStatus.OK);
    }

    //Build get all freelancer gigs REST API
    @GetMapping
    public ResponseEntity<List<FreelancerGigsDTO>> getAllGigs() {
        List<FreelancerGigsDTO> freelancerGigsDto = freelancerGigService.getAllGigs();
        return ResponseEntity.ok(freelancerGigsDto);
    }

    //Build update freelancer gig REST API
    @PutMapping("/{gigId}")
    public ResponseEntity<FreelancerGigsDTO> updateGig(@PathVariable long gigId, @RequestBody FreelancerGigsDTO updatedFreelancerGig) {
        FreelancerGigsDTO freelancerGigsDto = freelancerGigService.updateGig(gigId, updatedFreelancerGig);
        return ResponseEntity.ok(updatedFreelancerGig);
    }

    //Build delete freelancer gig REST API
    @DeleteMapping("/{gigId}")
    public ResponseEntity<?> deleteGig(@PathVariable long gigId) {
        freelancerGigService.deleteGig(gigId);
        return ResponseEntity.ok("Gig deleted successfully!");
    }
}
