import { Component, OnChanges, Input, SimpleChanges } from "@angular/core";
import { PetTag } from "app/core/pet-tag.model";

@Component({
  selector: "app-tag-preview",
  templateUrl: "./tag-preview.component.html",
  styleUrls: ["./tag-preview.component.css"],
})
export class TagPreviewComponent implements OnChanges {
  @Input() petTag: PetTag;
  imgSrc = '';
  tagClipText: string;
  gemsText: string;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error("Method not implemented.");
    this.imgSrc = `/assets/images/${this.petTag.shape}.svg`;
    this.tagClipText = this.boolToText(this.petTag.clip);
    this.gemsText = this.boolToText(this.petTag.gems);
  }

  boolToText(bool: boolean): string {
    return bool ? 'Yes' : 'No';
  }
}
