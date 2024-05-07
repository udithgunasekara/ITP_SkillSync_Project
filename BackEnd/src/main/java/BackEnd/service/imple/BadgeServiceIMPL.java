package BackEnd.service.imple;

import BackEnd.DTO.ImageEntityDTO;
import BackEnd.entity.Badge;
import BackEnd.repository.BadgeRepository;
import BackEnd.service.BadgeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class BadgeServiceIMPL implements BadgeService {

    private BadgeRepository badgeRepository;


    @Override
    public void saveBadge(Badge badge) {
        badgeRepository.save(badge);
    }

    @Override
    public ImageEntityDTO getBadgeByExamId(Long examid) {
        return null;
    }
}
