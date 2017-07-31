import {FormControl} from "@angular/forms";

// This function takes in a words array and returns a function.
// The returned function's return will be an object, doesn't matter what
// shape the object is.
export function restrictedWords(words) {
    return (control: FormControl): { [key: string]: any } => {
        if (!words) {
            return null;
        }

        var invalidWords = words.map(w => control.value.includes(w) ? w : null)
            .filter(w => w != null);

        // Does the form control's array contain restricted words?
        // If it does then the control is invalid because of restricted words.
        // If restricted word(s) is/are absent then the control is valid and we
        // return null.
        return (invalidWords && invalidWords.length > 0)
            ? {"restrictedWords": invalidWords.join(", ")} : null;
    }
}