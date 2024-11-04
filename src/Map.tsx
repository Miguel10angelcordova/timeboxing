import React, { useEffect, useState } from 'react';
import connection from './db'; // Asegúrate de que la ruta sea correcta

function Map() {
    const [data, setData] = useState([]);

    useEffect(() => {
        connection.query('SELECT * FROM tu_tabla', (error, results) => {
            if (error) {
                console.error('Error al ejecutar la consulta: ' + error.stack);
                return;
            }
            setData(results);
        });

        // Cierra la conexión cuando el componente se desmonta
        return () => {
            connection.end();
        };
    }, []);

    return (
        <>
            <div>
                <footer className="bg-dark text-light text-center py-1">
                    <p>{JSON.stringify(data)}</p> {/* Muestra los datos */}
                </footer>
            </div>
        </>
    );
}

export default Map;