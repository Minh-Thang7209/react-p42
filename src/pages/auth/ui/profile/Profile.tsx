import { useContext, useState } from 'react';
import AppContext from '../../../../features/_context/AppContext';
import './Profile.css';
import { clearRememberedUser } from '../../../../entities/user/lib/UserLib';

export default function Profile() {
    const { user, setUser } = useContext(AppContext);
    const [agreeDelete, setAgreeDelete] = useState(false);
    if (!user) return null;
    const logout = () => {
        clearRememberedUser();
        setUser(undefined);
    };
    const deleteProfile = () => {
        if (!window.confirm("Ви дійсно хочете видалити профіль?")) {
            return;
        }
        clearRememberedUser();
        setUser(undefined);
        alert("Профіль видалено.");
    }


    return (
        <div className="profile-container">
            <h2>Кабінет користувача</h2>

            <p><strong>Логін:</strong> {user.login}</p>
            <p><strong>Ім'я:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>

            <button
                className="btn btn-secondary mt-3"
                onClick={logout}
            >
                Вийти
            </button>

            <div className="form-check mt-4">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="deleteProfile"
                    checked={agreeDelete}
                    onChange={(e) => setAgreeDelete(e.target.checked)}
                />

                <label
                    className="form-check-label"
                    htmlFor="deleteProfile"
                >
                    Я підтверджую видалення свого профілю
                </label>
            </div>

            <button
                className="btn btn-danger mt-3"
                disabled={!agreeDelete}
                onClick={deleteProfile}
            >
                Видалити профіль
            </button>
        </div>
    );
}