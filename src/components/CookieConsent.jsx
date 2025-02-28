import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
    const [cookieAccepted, setCookieAccepted] = useState(false);

    // Ellenőrizzük, hogy a felhasználó már elfogadta-e a cookie-kat
    useEffect(() => {
        const cookieConsent = Cookies.get('cookie-consent');
        if (cookieConsent) {
            setCookieAccepted(true);
        }
    }, []);

    const handleAcceptCookies = () => {
        // Beállítjuk a cookie-t, hogy ne jelenjen meg többet
        Cookies.set('cookie-consent', 'true', { expires: 365 });
        setCookieAccepted(true);
    };

    return (
        <>
            {!cookieAccepted && (
                <div style={styles.banner}>
                    <p>Ez az oldal cookie-kat használ. A böngészés folytatásával elfogadod a cookie-k használatát.</p>
                    <button onClick={handleAcceptCookies}>Elfogadom</button>
                </div>
            )}
        </>
    );
};

const styles = {
    banner: {
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
    },
};

export default CookieConsent;
