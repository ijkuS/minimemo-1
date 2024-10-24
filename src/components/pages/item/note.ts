import { BaseComponent } from '../../component.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
	constructor(title: string, body: string) {
		super(`<section class="note">
					<div class="text__holder">
						<h2 class="note__title"></h2>
						<p class="note__description"></p>
					</div>
            </section>`);

		const titleElement = this.element.querySelector(
			'.note__title'
		)! as HTMLHeadingElement;
		titleElement.textContent = title;

		const bodyElement = this.element.querySelector(
			'.note__description'
		)! as HTMLParagraphElement;
		bodyElement.textContent = body;
	}
}
