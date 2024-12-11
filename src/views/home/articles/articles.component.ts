import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
import { Article } from './article';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  @Input({ required: true }) post!: Article;
}
