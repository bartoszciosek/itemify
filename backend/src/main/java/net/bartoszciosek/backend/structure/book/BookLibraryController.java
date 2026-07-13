package net.bartoszciosek.backend.structure.book;

import net.bartoszciosek.backend.structure.AbstractLibraryController;
import net.bartoszciosek.backend.structure.AbstractLibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/book")
@CrossOrigin(origins = "http://localhost:5173")
public class BookLibraryController extends AbstractLibraryController<String, BookLibraryItem> {

    @Autowired
    public BookLibraryController(AbstractLibraryService<String, BookLibraryItem> service) {
        super(service);
    }

    @Override
    @GetMapping("/all")
    public ResponseEntity<Collection<BookLibraryItem>> getAllItems() {
        return super.getAllItems();
    }

    @Override@PostMapping("/add/{key}")
    public ResponseEntity<String> addItem(@PathVariable String key, @RequestBody BookLibraryItem item) {
        return super.addItem(key, item);

    }
}
