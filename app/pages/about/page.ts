import { Component } from '@angular/core';
import { BasePage } from '../../core/page';

@Component({
    templateUrl: 'build/pages/about/template.html',
    directives: [],
})
export class AboutPage extends BasePage {

    public get PageContent(): string {
        return this.Text.PAGE_ABOUT_CONTENT || '';
    }
}
