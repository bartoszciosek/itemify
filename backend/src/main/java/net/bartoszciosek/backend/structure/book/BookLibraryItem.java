package net.bartoszciosek.backend.structure.book;

import net.bartoszciosek.backend.structure.LibraryItem;

public record BookLibraryItem(String title, String author, int pages) implements LibraryItem {

}