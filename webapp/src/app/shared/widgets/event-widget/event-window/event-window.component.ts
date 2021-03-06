import {Component, OnChanges, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {EventEditorComponent} from '../event-editor/editor/event-editor.component';

@Component({
	selector: 'app-event-window',
	templateUrl: './event-window.component.html',
	styleUrls: ['./event-window.component.scss', '../../widget.scss'],
})
export class EventWindowComponent {
	
	@ViewChild('eventEditor') eventEditor: EventEditorComponent;
	
	@Input() event;
	@Output() exit = new EventEmitter();
	
	constructor() {
	}
	
	save() {
		this.exit.emit(this.eventEditor.export());
	}
	
	cancel() {
		this.exit.error('cancel');
	}
}
