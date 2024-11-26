import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: any[] = [];
  filteredPosts: any[] = [];
  error: string | null = null;
  searchQuery: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    this.http.get<any[]>(API_URL).subscribe({
      next: (data) => {
        this.posts = data;
        this.filteredPosts = data;
      },
      error: (err) => {
        this.error = 'Failed to load posts. Please try again later.';
        console.error(err);
      },
    });
  }

  filterPosts() {
    this.filteredPosts = this.posts.filter((post) =>
      post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
