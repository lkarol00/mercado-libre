export interface ResultsInterface {
    site_id: string;
    query: string;
    paging: Object;
    results: Array<Object>;
    secondary_results: Array<Object>;
    related_results: Array<Object>;
    sort: Object;
    available_sorts: Array<Object>;
    filters: Array<Object>;
    available_filter: Array<Object>;
}
