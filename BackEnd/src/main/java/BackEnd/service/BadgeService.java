package BackEnd.service;

import BackEnd.DTO.ImageEntityDTO;
import BackEnd.entity.Badge;

public interface BadgeService {
    public void saveBadge(Badge badge);
    public ImageEntityDTO getBadgeByExamId(Long examid);
}
