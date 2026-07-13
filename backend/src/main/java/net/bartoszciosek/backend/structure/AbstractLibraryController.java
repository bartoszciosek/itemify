package net.bartoszciosek.backend.structure;

import org.springframework.http.ResponseEntity;

import java.util.Collection;

public abstract class AbstractLibraryController<K, I extends LibraryItem> {

    private final AbstractLibraryService<K, I> service;

    public AbstractLibraryController(AbstractLibraryService<K, I> service) {
        this.service = service;
    }

    public ResponseEntity<Collection<I>> getAllItems() {
        return ResponseEntity.ok(service.getItems().values());
    }

    public ResponseEntity<String> addItem(K key, I item) {
        service.addItem(key, item);
        return ResponseEntity.ok("Item added");
    }

    public AbstractLibraryService<K, I> getService() {
        return service;
    }
}