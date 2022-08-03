export interface Change {
    onChange: (e: React.ChangeEvent<HTMLInputElement>, title: string) => void;
    handledisabled: () => boolean
}

export interface SetupProps {
    id: number;
    title: string;
    isChecked: boolean;
    tasks: {
      title: string;
      checked: boolean;
    }[];
}

