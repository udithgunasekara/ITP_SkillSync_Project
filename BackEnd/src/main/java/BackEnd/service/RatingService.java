package BackEnd.service;

import BackEnd.DTO.RatingDto;

import java.util.List;

public interface RatingService {
    RatingDto createRating(RatingDto ratingDto);

    RatingDto getRatingById(Long ratingId);

    List<RatingDto> getAllRatings();

    List<RatingDto> getAllRatingsByuserID(String userID);

    RatingDto updateRating(Long ratingId, RatingDto updateRating);

    void deleteRating(Long ratingId);
}

