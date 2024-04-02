package BackEnd.Mapper;

import BackEnd.DTO.RatingDto;
import BackEnd.entity.Rating;

public class RatingMapper {

    public static RatingDto mapToRatingDto(Rating rating) {
        return  new RatingDto(
                rating.getId(),
                rating.getAttachments(),
                rating.getUserID(),
                rating.getRating(),
                rating.getProjectID(),
                rating.getReview()
        );
    }

    public static Rating mapToRating(RatingDto ratingDto) {
        return new Rating(
                ratingDto.getId(),
                ratingDto.getAttachments(),
                ratingDto.getUserID(),
                ratingDto.getRating(),
                ratingDto.getProjectID(),
                ratingDto.getReview()
        );
    }

}

