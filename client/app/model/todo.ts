export class TODO
{
    id: string;
    isCompleted: boolean;
    category: string;
    task: string;
    statuses: [{
        description: string,
        date: string,
    }]
}