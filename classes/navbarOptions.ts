type tHeaderTitleAlign = 'center' | 'left' | undefined;

export class NavbarOptions {
    title: string;
    headerBackTitleVisible: boolean;
    headerTitleAlign: tHeaderTitleAlign;

    constructor(
        title: string,
        headerBackTitleVisible: boolean,
        headerTitleAlign: tHeaderTitleAlign
    ) {
        this.title = title;
        this.headerBackTitleVisible = headerBackTitleVisible;
        this.headerTitleAlign = headerTitleAlign;
    }
}
