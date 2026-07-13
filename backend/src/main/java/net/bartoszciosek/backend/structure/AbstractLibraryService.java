package net.bartoszciosek.backend.structure;

import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public abstract class AbstractLibraryService<K, I extends LibraryItem> {

    private final Map<K, I> items = new ConcurrentHashMap<>();

    public void addItem(K key, I item) {
        items.put(key, item);
    }

    public void removeItem(K key) {
        items.remove(key);
    }

    public I getItem(K id) {
        return items.get(id);
    }

    public Map<K, I> getItems() {
        return items;
    }
}