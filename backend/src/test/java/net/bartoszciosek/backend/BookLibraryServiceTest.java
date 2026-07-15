package net.bartoszciosek.backend;

import net.bartoszciosek.backend.structure.book.BookLibraryItem;
import net.bartoszciosek.backend.structure.book.BookLibraryService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class BookLibraryServiceTest {

    private BookLibraryService bookLibraryService;

    @BeforeEach
    void setUp() {
        bookLibraryService = new BookLibraryService();
    }

    @Test
    void shouldAddItemToLibrary() {
        var bookId = "12345";
        var book = new BookLibraryItem("Wiedźmin: Ostatnie życzenie", "Andrzej Sapkowski", 320);
        bookLibraryService.addItem(bookId, book);
        var savedBook = bookLibraryService.getItem(bookId);
        assertNotNull(savedBook, "Książka powinna zostać zapisana w bibliotece");
        assertEquals(book, savedBook, "Pobrana książka powinna być dokładnie tym samym obiektem");
        assertEquals("Wiedźmin: Ostatnie życzenie", savedBook.title(), "Tytuł książki powinien się zgadzać");
    }

    @Test
    void shouldRemoveItemFromLibrary() {
        var bookId = "9999";
        var book = new BookLibraryItem("Hobbit", "J.R.R. Tolkien", 310);
        bookLibraryService.addItem(bookId, book);
        bookLibraryService.removeItem(bookId);
        var removedBook = bookLibraryService.getItem(bookId);
        assertNull(removedBook, "Książka powinna zostać usunięta z pamięci");
    }

    @Test
    void shouldReturnAllItems() {
        var book1 = new BookLibraryItem("Książka 1", "Autor 1", 150);
        var book2 = new BookLibraryItem("Książka 2", "Autor 2", 250);
        bookLibraryService.addItem("ID1", book1);
        bookLibraryService.addItem("ID2", book2);
        var items = bookLibraryService.getItems();
        assertEquals(2, items.size(), "Biblioteka powinna zawierać dokładnie 2 książki");
        assertTrue(items.containsKey("ID1"));
        assertTrue(items.containsKey("ID2"));
    }
}