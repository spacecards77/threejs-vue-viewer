import {Construction} from "../../model";
import {JsonService} from "../../../services/JsonService.ts";
import {AssertUtils} from "../../../utils/assert/AssertUtils.ts";

export class LoadJsonFileMenuItem {
    private handleConstructionLoaded: (construction: Construction) => void;

    constructor(handleConstructionLoaded: (construction: Construction) => void) {
        this.handleConstructionLoaded = handleConstructionLoaded;
    }

    public loadFile(file: File): void {
        const reader = new FileReader();

        reader.onload = (event) => {
            try {
                const jsonString = event.target?.result as string;
                const jsonService = new JsonService();
                const construction = jsonService.deserialize(jsonString);
                AssertUtils.isNotNull(construction, "Construction data is null after deserialization");
                this.handleConstructionLoaded(construction!);
            } catch (error) {
                console.error('Error loading JSON file:', error);
                alert(`Ошибка загрузки файла: ${error}`);
            }
        };

        reader.onerror = () => {
            console.error('Error reading file');
            alert('Ошибка чтения файла');
        };

        reader.readAsText(file);
    }
}