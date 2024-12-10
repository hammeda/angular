import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"  // Demande au router de s'assurer que l'URL "complete" dans le navigateur est exactement la même que le path de cette route 
    },
    {
        path: "home",
        loadComponent: () => import('../views/articles/articles.component')
            .then(m => m.ArticlesComponent)
    },
    {
        path: "register",
        loadComponent: () => import('../views/register/register.component')
            .then(m => m.RegisterComponent)
    },
    {
        path: "editor",
        loadComponent: () => import('../views/article-editor/article-editor.component')
            .then(m => m.ArticleEditorComponent)
    },

    {
        path: "login",
        loadComponent: () => import('../views/login/login.component')
            .then(m => m.LoginComponent)
    },
];
