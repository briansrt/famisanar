# 📘 Manual de Usuario
# Portal de Agendamientos CEMDI Famisanar

![Logo Famisanar](public/iconfamisanar.png)

Versión: 1.1  ·  Fecha: 2025  ·  Elaborado por: Equipo de Desarrollo Mozart AI



## Índice
1. Bienvenida
2. ¿Qué puedes hacer con el portal?
3. Paso a paso: cómo agendar tu cita
   - 1) Acceder al Portal (con capturas sugeridas)
   - 2) Iniciar la Conversación (con capturas sugeridas)
   - 3) Saludo Inicial (con capturas sugeridas)
   - 4) Identificarte
   - 5) Solicitar el Agendamiento
   - 6) Proporcionar tu Documento (con capturas sugeridas)
   - 7) Verificación Automática (con capturas sugeridas)
   - 8) Seleccionar Especialidad (con capturas sugeridas)
   - 9) Verificación de Disponibilidad (con capturas sugeridas)
   - 10) Confirmación de Cita (con capturas sugeridas)
4. Situaciones Especiales
5. Consejos útiles
6. Disponibilidad del Portal
7. Seguridad y Privacidad
8. Ayuda adicional
9. ¡Listo para empezar!

---

## 🏥 **Bienvenido al Portal de Agendamientos**

El Portal de Agendamientos CEMDI Famisanar es tu herramienta inteligente para agendar citas médicas de manera rápida y sencilla, disponible las 24 horas del día.

---

## 🎯 **¿Qué puedes hacer con nuestro portal?**

✅ **Agendar citas médicas** en las siguientes especialidades:
- **Nefrología** (riñones y vías urinarias)
- **Medicina Interna** (medicina general para adultos)
- **Endocrinología** (diabetes, tiroides, hormonas)
- **Endocrinología Pediátrica** (hormonas en niños)

✅ **Verificar disponibilidad** de horarios y profesionales
✅ **Reprogramar o cancelar** citas existentes
✅ **Obtener información** sobre requisitos y documentos

---

## 🚀 **PASO A PASO: Cómo agendar tu cita**

### **1. Acceder al Portal**
- Ingresa a la página web del Portal de Agendamientos
- Verás el botón **"AGENDA TU CITA"** en la esquina superior derecha (computador) o inferior derecha (celular)
- Una flecha animada te ayudará a encontrarlo la primera vez

Ejemplos visuales:

![Botón AGENDA TU CITA (desktop)](/docs/img/1-boton-agenda-desktop.png)

![Botón AGENDA TU CITA (mobile)](/docs/img/1-boton-agenda-mobile.png)

Capturas sugeridas para esta sección:
- Widget en desktop en la esquina superior derecha con la flecha apuntando hacia arriba (`/docs/img/1a-widget-desktop-flecha.png`).
- Widget en mobile en la esquina inferior derecha con la flecha apuntando hacia abajo (`/docs/img/1b-widget-mobile-flecha.png`).

### **2. Iniciar la Conversación**
- Haz clic en **"AGENDA TU CITA"**
- Aparecerá la ventana del widget en la esquina superior derecha (PC) o inferior derecha (móvil)
- Lee y acepta los **Términos y Condiciones**
- En PC, usa el botón deslizante para alternar entre **Chat** y **Voz**; en móvil verás el botón de chat en la esquina inferior derecha.

Ejemplo visual (Términos y Condiciones):

![Términos y Condiciones](/docs/img/2-terminos-condiciones.png)

Capturas sugeridas:
- Slider Chat/Voz visible debajo del widget en desktop con estado “Chat” (`/docs/img/2a-slider-chat.png`) y con estado “Voz” (`/docs/img/2b-slider-voz.png`).

### **3. Saludo Inicial**
**Asistente:** "Hola, soy tu asistente digital de CEMDI FAMISANAR para agendar citas en Nefrología, Medicina Interna, Endocrinología y Endocrinología Pediátrica. ¿Me confirmas tu nombre?"

Ejemplo visual (saludo):

![Saludo inicial](/docs/img/3-saludo-inicial.png)

Captura sugerida:
- Vista del saludo inicial en el widget (`/docs/img/3-saludo-inicial.png`).

### **4. Identificarte**
**Tú dices:** Tu nombre completo (ejemplo: "Soy Ana Pérez")
**Asistente:** "Gracias, Ana. Para continuar, ¿cuál es tu número de identificación?"

Captura sugerida:
- Mensaje donde el asistente solicita el número de identificación (`/docs/img/4-solicita-identificacion.png`).
  
### **5. Solicitar el Agendamiento**
**Tú dices:** "Quiero agendar" o "Necesito una cita"
**Asistente:** "Para empezar el proceso de agendamiento, por favor dime tu número de documento."

### **6. Proporcionar tu Documento**
**Tú dices:** Tu número de cédula (ejemplo: "1012345678")
**Asistente:** "Gracias. Voy a verificar internamente tu documento, tu EPS y el estado de tu autorización."

Capturas sugeridas:
- Mensaje con el documento ingresado por el paciente (`/docs/img/6a-documento-ingresado.png`).
- Indicador de verificación del asistente (`/docs/img/6b-verificando.png`).

Ejemplo visual (documento solicitado):


### **7. Verificación Automática**
El asistente verificará automáticamente:
- ✅ Que seas paciente de **Famisanar**
- ✅ Que tengas **autorización vigente**
- ✅ Que estés **habilitado** para agendar

Ejemplos visuales:

![Verificación EPS/Autorización OK](/docs/img/7-verificacion-ok.png)

![Caso sin autorización](/docs/img/7b-sin-autorizacion.png)

### **8. Verificación de Autorización y Datos**
El asistente consultará automáticamente tu autorización médica y te mostrará:
- Tu información personal (nombre completo e identificación)
- Los detalles de tu autorización (número, descripción y fecha)
- La especialidad médica autorizada (ya determinada por tu EPS)
- Las sedes disponibles donde puedes agendar

Luego te pedirá que elijas el número de la sede donde prefieres agendar tu cita.

**Tú respondes:** El número de la sede que prefieres (ejemplo: "1", "2" o "3")

Capturas sugeridas:
- Mensaje con los datos del paciente y autorización (`/docs/img/8a-datos-autorizacion.png`).
- Lista de sedes disponibles numeradas (`/docs/img/8b-sedes-disponibles.png`).

### **9. Selección de Horarios**
Una vez que hayas elegido la sede, el asistente buscará automáticamente los horarios disponibles y te mostrará las primeras **5** opciones de fecha y hora para esa sede específica.

El asistente te presentará las opciones numeradas con:
- Fecha disponible
- Hora específica
- Instrucciones para que elijas una opción (1, 2, 3, 4 o 5)

**Tú respondes:** El número de la opción que prefieres (ejemplo: "3")

Capturas sugeridas:
- Lista de 5 opciones de horarios para la sede elegida (`/docs/img/9-horarios-sede.png`).

### **10. Confirmación Final de Cita**
Una vez que hayas elegido el horario que prefieres, el asistente procederá a agendar tu cita y te dará la confirmación final.

**Asistente:** "Has sido agendado exitosamente para el día diecisiete de septiembre de dos mil veinticinco a las siete de la mañana.

Por favor recuerda llevar a tu cita la autorización en físico, tus laboratorios y/o exámenes médicos recientes, así como tu documento de identidad.

¿Hay algo más en lo que pueda ayudarte hoy?"

**Tú puedes responder:** 
- "No, gracias" (para finalizar)
- "Sí, necesito..." (si tienes otra consulta)

Captura sugerida:
- Confirmación final de cita con todos los detalles (`/docs/img/10-confirmacion-final.png`).

---

## 🖥️ **Plataforma de Gestión de Pacientes**

Una vez que has agendado tu cita a través del Portal de Agendamientos, tu información se registra automáticamente en la plataforma interna de CEMDI Famisanar, donde el equipo médico puede gestionar y hacer seguimiento a todas las citas programadas.

### **📋 Gestión de Pacientes**
La plataforma muestra una lista completa de todos los pacientes Famisanar con sus datos principales:

**Información del Paciente:**
- **Nombre completo** del paciente
- **Número de identificación**
- **Teléfono de contacto**
- **Correo electrónico**

**Acciones Disponibles:**
- **📞 Llamada**: Contacto telefónico directo con el paciente
- **💬 WhatsApp**: Envío de recordatorios y confirmaciones
- **📅 Agenda**: Acceso directo a la agenda del paciente
- **📋 Historia Clínica**: Consulta del historial médico
- **🔄 Seguimiento**: Plan de tratamiento y seguimiento

Captura sugerida:
- Vista de la plataforma de gestión de pacientes (`/docs/img/plataforma-pacientes.png`).

### **📅 Agenda de Citas**
La plataforma incluye una sección dedicada a la gestión de citas agendadas:

**Pestañas de Navegación:**
- **Agendadas**: Citas confirmadas y programadas
- **Pendiente Agendar**: Citas que requieren confirmación
- **Completadas**: Citas ya realizadas

**Información de cada Cita:**
- **Fecha y hora** de la cita
- **Trimestre** (T1-2025, T2-2025, etc.)
- **Especialidad médica** autorizada
- **Doctor asignado** (o "No asignado" si está pendiente)
- **Tipo de consulta** (Presencial, Virtual)
- **Estado** (pendiente, confirmada, completada)
- **Motivo** de la cita
- **Notas** del sistema (incluye ID del evento)

**Acciones de Seguimiento:**
- **💬 WhatsApp**: Envío de recordatorios automáticos
- **📞 Llamada**: Contacto telefónico para confirmación

**Filtros Disponibles:**
- Filtro por trimestre para organizar las citas
- Búsqueda por paciente específico
- Recarga de datos en tiempo real

Captura sugerida:
- Vista de la agenda de citas con filtros (`/docs/img/agenda-citas.png`).

### **🔄 Proceso de Recordatorios**
Una vez agendada tu cita, el sistema automáticamente:

1. **Registra la cita** en la plataforma de gestión
2. **Programa recordatorios** vía WhatsApp y llamada
3. **Asigna el doctor** correspondiente a la especialidad
4. **Envía confirmaciones** con todos los detalles
5. **Hace seguimiento** hasta el día de la cita

**Recordatorios Automáticos:**
- **WhatsApp**: Mensajes con fecha, hora, sede y doctor
- **Llamada**: Confirmación telefónica 24-48 horas antes
- **Email**: Recordatorio adicional con instrucciones

---

## 🔄 **Situaciones Especiales**

### **📱 Si no tienes EPS Famisanar**
**Mozart responde:** "Veo que tu EPS no es Famisanar. Este canal agenda exclusivamente para Famisanar en CEMDI. Por favor contacta tu EPS para continuar."

### **📋 Si no tienes autorización**
**Mozart responde:** "Tu EPS es Famisanar, pero no encuentro autorización vigente. Para agendar en CEMDI necesitas tramitarla con tu EPS. ¿Deseas que te envíe por WhatsApp los pasos?"

### **📅 Si no hay cupos disponibles**
**Mozart ofrece:** "Puedo: 1) agregarte a lista de espera, 2) buscar otra sede/profesional, o 3) tomar el primer cupo la próxima semana. ¿Qué prefieres?"

### **👶 Para citas pediátricas**
**Mozart confirma:** "Entendido. ¿El paciente es menor de edad? Recuerda asistir con acudiente y documentos del tutor."

### **🔄 Para cambiar o cancelar citas**
**Tú dices:** "Quiero cambiar mi cita" o "Necesito cancelar"
**Mozart responde:** "Claro. Indícame especialidad y fecha/hora de la cita para reprogramar o confirmar la cancelación."

Ejemplo visual (reprogramar/cancelar):

![Reprogramar o cancelar](/docs/img/8-reprogramar-cancelar.png)

---



## 💡 **Consejos Útiles**

### **✅ Antes de agendar, ten a la mano:**
- Tu número de cédula
- Tu autorización médica vigente
- Preferencias de horario y sede

### **✅ Frases que puedes usar:**
- "Hola, quiero agendar una cita"
- "Necesito medicina interna para mañana"
- "¿Hay disponibilidad en endocrinología?"
- "Quiero cambiar mi cita del viernes"
- "Es para mi hijo de 8 años"

### **✅ Información importante:**
- 🕐 Llega **15 minutos antes** de tu cita
- 📄 Lleva tu **autorización médica**
- 📱 Recibirás confirmación por **WhatsApp**
- 🆔 Ten tu **documento de identidad**

---

## 📱 **Disponibilidad del Portal**

- **🌐 Acceso:** 24 horas al día, 7 días a la semana
- **💻 Dispositivos:** Computador, tablet y celular
- **🎯 Ubicación del botón:** 
  - Computador: Esquina superior derecha
  - Celular: Esquina inferior derecha
- **🔊 Funciones:** Chat de texto y voz disponibles

---

## 🔒 **Seguridad y Privacidad**

✅ **Proceso 100% seguro** con encriptación de datos
✅ **Información médica protegida** según normativas de salud
✅ **Certificación médica** de CEMDI Famisanar
✅ **Grabación de conversaciones** solo para mejorar el servicio

---

## 📞 **¿Necesitas ayuda adicional?**

Si tienes problemas con el portal o necesitas asistencia personalizada:

- **📧 Correo CEMDI:** atencionalusuario@cemdi.co
- **📱 WhatsApp / Llamadas:** (601) 511 0559
- **🏥 Presencial:** Visita cualquier sede de CEMDI Famisanar

Captura sugerida (opcional):
- Footer del sitio mostrando el contacto por WhatsApp y correo (`/docs/img/footer-contacto.png`).

---

## 🎉 **¡Listo para empezar!**

Tu salud es nuestra prioridad. Con el Portal de Agendamientos Cemdi Famisanar, agendar tus citas médicas nunca fue tan fácil y rápido.

**¡Haz clic en "AGENDA TU CITA" y comienza ahora mismo!** 🚀

---

*Manual actualizado - Portal de Agendamientos Cemdi Famisanar*
*Versión 1.0 - 2025*

---

