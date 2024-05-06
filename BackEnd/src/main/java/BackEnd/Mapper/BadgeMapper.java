package BackEnd.Mapper;

import BackEnd.DTO.BadgeDTO;
import BackEnd.entity.Badge;

public class BadgeMapper {

    public static Badge mapToBadge(BadgeDTO badgeDTO){
        return new Badge(
                badgeDTO.getBadgeId(),
                badgeDTO.getBadgeNAme(),
                badgeDTO.getBadge(),
                badgeDTO.getExamId()
        );
    }

    public static  BadgeDTO mapToBadgeDTO(Badge badge){
        return new BadgeDTO(
                badge.getBadgeId(),
                badge.getBadgeNAme(),
                badge.getBadge(),
                badge.getExamId()
        );
    }
}
