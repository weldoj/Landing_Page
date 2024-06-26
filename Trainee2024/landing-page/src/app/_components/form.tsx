"use client"
import { type ChangeEvent, useState, type FormEvent } from "react";
import contatoStyles from "~/styles/contato.module.css";



export function Form() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
    });

    const [formErrors, setFormErrors] = useState({
        nome: "",
        email: "",
        telefone: "",
    });

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        
        if (!formData.nome || !formData.email || !formData.telefone) {
            setFormErrors({
                nome: formData.nome ? "" : "Campo obrigatório",
                email: formData.email ? "" : "Campo obrigatório",
                telefone: formData.telefone ? "" : "Campo obrigatório",
            });
            return;
        }

      
        console.log(formData);

        
        setFormData({
            nome: "",
            email: "",
            telefone: "",
        });

      
        setFormErrors({
            nome: "",
            email: "",
            telefone: "",
        });
    }

    return (
        <form className={contatoStyles.form} onSubmit={handleSubmit}>
            <div className={contatoStyles.inputGroup}>
                <label htmlFor="nome" className={contatoStyles.label}>
                    Nome
                </label>
                <input
                    onChange={handleChange}
                    value={formData.nome}
                    className={contatoStyles.input}
                    type="text"
                    placeholder="Digite seu nome"
                    name="nome"
                />
                 <p className={`${contatoStyles.error} ${formErrors.nome && contatoStyles.errorVisible}`}>
                    {formErrors.nome}
                </p>
            </div>
            <div className={contatoStyles.inputGroup}>
                <label htmlFor="email" className={contatoStyles.label}>
                    Email
                </label>
                <input
                    onChange={handleChange}
                    value={formData.email}
                    className={contatoStyles.input}
                    type="email"
                    placeholder="Digite seu email"
                    name="email"
                />
                <p className={`${contatoStyles.error} ${formErrors.email && contatoStyles.errorVisible}`}>
                    {formErrors.email}
                </p>
            </div>
            <div className={contatoStyles.inputGroup}>
                <label htmlFor="telefone" className={contatoStyles.label}>
                    Telefone
                </label>
                <input
                    onChange={handleChange}
                    value={formData.telefone}
                    className={contatoStyles.input}
                    type="text"
                    placeholder="(61) 99999-9999"
                    name="telefone"
                />
                 <p className={`${contatoStyles.error} ${formErrors.telefone && contatoStyles.errorVisible}`}>
                    {formErrors.telefone}
                </p>
            </div>

            <button type="submit" className={contatoStyles.button}>
                Enviar
            </button>
        </form>
    );
}
