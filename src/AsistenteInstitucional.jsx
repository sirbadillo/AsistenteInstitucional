
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AsistenteInstitucional() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "asistente", content: "Hola 👋 Soy tu asistente institucional UCM. ¿En qué puedo ayudarte hoy?" }
  ]);

  const datosPorAño = {
    matricula: {
      "2019": 2407, "2020": 2473, "2021": 2295,
      "2022": 2502, "2023": 2744, "2024": 3074, "2025": 3312
    },
    retencion: {
      "2019": 86.6, "2020": 85.4, "2021": 84.9,
      "2022": 86.2, "2023": 87.5, "2024": 85.9
    },
    egreso: {
      "2016": 1050, "2017": 1103, "2018": 1120,
      "2019": 1145, "2020": 1173
    },
    titulacion: {
      "2016": 64.2, "2017": 65.1, "2018": 67.3,
      "2019": 68.7, "2020": 70.4
    },
    academicos: {
      "2019": 412, "2020": 409, "2021": 377,
      "2022": 368, "2023": 396
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "usuario", content: input };
    const responseMessage = getSimulatedResponse(input);

    setMessages([...messages, userMessage, responseMessage]);
    setInput("");
  };

  const getSimulatedResponse = (input) => {
    const lower = input.toLowerCase();
    const añoMatch = lower.match(/20\d{2}/);
    const año = añoMatch ? añoMatch[0] : null;

    if (año) {
      if (lower.includes("matrícula") || lower.includes("ingresaron")) {
        const val = datosPorAño.matricula[año];
        return val
          ? { role: "asistente", content: `En ${año}, ingresaron aproximadamente ${val.toLocaleString()} estudiantes nuevos en modalidad presencial.` }
          : { role: "asistente", content: `No tengo datos de matrícula disponibles para el año ${año}.` };
      } else if (lower.includes("retención")) {
        const val = datosPorAño.retencion[año];
        return val
          ? { role: "asistente", content: `La tasa de retención al segundo año en ${año} fue de ${val}%.` }
          : { role: "asistente", content: `No tengo datos de retención para el año ${año}.` };
      } else if (lower.includes("egreso") || lower.includes("egresaron")) {
        const val = datosPorAño.egreso[año];
        return val
          ? { role: "asistente", content: `En ${año}, egresaron ${val.toLocaleString()} estudiantes de programas de pregrado.` }
          : { role: "asistente", content: `No tengo datos de egresos para el año ${año}.` };
      } else if (lower.includes("titulación") || lower.includes("titularon")) {
        const val = datosPorAño.titulacion[año];
        return val
          ? { role: "asistente", content: `La tasa de titulación oportuna para la cohorte de ${año} fue de ${val}%.` }
          : { role: "asistente", content: `No tengo datos de titulación para el año ${año}.` };
      } else if (lower.includes("académico") || lower.includes("docente")) {
        const val = datosPorAño.academicos[año];
        return val
          ? { role: "asistente", content: `En ${año}, la UCM contó con ${val.toLocaleString()} académicos.` }
          : { role: "asistente", content: `No tengo datos sobre dotación académica para el año ${año}.` };
      }
    }

    return { role: "asistente", content: "Gracias por tu consulta. Derivaré esta pregunta al equipo correspondiente. ¿Quieres dejar un correo de contacto?" };
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
      <div>
        
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🤖 Asistente Institucional UCM</h2>
          <div style={{ height: '300px', overflowY: 'auto', background: '#f1f1f1', padding: '1rem', borderRadius: '8px' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ textAlign: msg.role === 'usuario' ? 'right' : 'left', marginBottom: '0.5rem' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  borderRadius: '1rem',
                  backgroundColor: msg.role === 'usuario' ? '#cce5ff' : '#d4edda'
                }}>
                  {msg.content}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <Input
              placeholder="Escribe tu pregunta..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button onClick={handleSend}>Enviar</Button>
          </div>
        
      </div>
    </div>
  );
}
// Último cambio Brayan - despliegue limpio