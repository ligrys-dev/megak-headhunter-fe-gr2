import {HeaderPanel} from "../common/HeaderPanel/HeaderPanel";
import {BookmarksPanel} from "../common/BookmarksPanel/BookmarksPanel";
import './AdminPanel.css';

export const AdminPanel = () => {
    const bookmarks = [
        ['addStudents', 'Dodaj kursantów'],
        ['addHR', 'Dodaj HR'],
    ];

    return (
        <div className='admin_panel'>
            <HeaderPanel name="Admin" lastName="admin@admin.com" urlAccount="/admin"/>
            <div className="panel_main">
                <BookmarksPanel bookmarks={bookmarks}/>
            </div>
        </div>
    );
};