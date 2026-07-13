package net.bartoszciosek.backend.structure.movie;

import net.bartoszciosek.backend.structure.LibraryItem;

public record MovieLibraryItem(String title, String director, long duration) implements LibraryItem {

}
