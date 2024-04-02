package BackEnd.service.imple;

import BackEnd.DTO.RatingDto;
import BackEnd.entity.Rating;
import BackEnd.Exceptions.ResourceNotFound;
import BackEnd.Mapper.RatingMapper;
import BackEnd.repository.RatingRepository;
import BackEnd.service.RatingService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class RatingServiceImpl implements RatingService {

    private RatingRepository ratingRepository;

    @Override
    public RatingDto createRating(RatingDto ratingDto) {
        Rating rating = RatingMapper.mapToRating(ratingDto);
        Rating savedRating = ratingRepository.save(rating);
        return RatingMapper.mapToRatingDto(savedRating);
    }

    @Override
    public RatingDto getRatingById(Long ratingId) {

        //Validation
        Rating rating = ratingRepository.findById(ratingId)
                .orElseThrow(() ->
                        new ResourceNotFound("Rating is not exists with given id : "+ratingId));
        return RatingMapper.mapToRatingDto(rating);
    }

    @Override
    public List<RatingDto> getAllRatings() {
        List<Rating> ratings = ratingRepository.findAll();
        return ratings.stream().map((rating) -> RatingMapper.mapToRatingDto(rating))
                .collect(Collectors.toList());
    }

    @Override
    public RatingDto updateRating(Long ratingId, RatingDto updateRating) {

        //Validation
        Rating rating = ratingRepository.findById(ratingId).orElseThrow(
                () -> new ResourceNotFound("Rating is not exists with given id : "+ratingId)
        );

        rating.setRating(updateRating.getRating());
        rating.setReview(updateRating.getReview());
        rating.setUserID(updateRating.getUserID());
        rating.setProjectID(updateRating.getProjectID());

        Rating updateRatingObj = ratingRepository.save(rating);

        return RatingMapper.mapToRatingDto(updateRatingObj);
    }

    @Override
    public void deleteRating(Long ratingId) {

        //Validation
        Rating rating = ratingRepository.findById(ratingId).orElseThrow(
                () -> new ResourceNotFound("Rating is not exists with given id : "+ratingId)
        );

        ratingRepository.deleteById(ratingId);

    }


}

