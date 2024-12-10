import { Component, inject, Input } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from './article';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  @Input({ required: true }) post!: Article;

  protected service = inject(ArticleService);

  data = this.service.all()
}
