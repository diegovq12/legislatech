export interface RecursoApoyo{
    titulo: string;
    descripcion: string;
    correo: string;
    telefono: string;
    link:string;
}

export interface Message{
    id: string;
    content:string;
    sender: 'user' | 'bot';
}
