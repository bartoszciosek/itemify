package net.bartoszciosek.backend.structure.movie;

import net.bartoszciosek.backend.structure.AbstractLibraryController;
import net.bartoszciosek.backend.structure.AbstractLibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movie")
public class MovieLibraryController extends AbstractLibraryController<String, MovieLibraryItem> {

    @Autowired
    public MovieLibraryController(AbstractLibraryService<String, MovieLibraryItem> service) {
        super(service);
    }
}