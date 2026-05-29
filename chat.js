document.addEventListener('DOMContentLoaded', () => {
    const widget = document.querySelector('.chat-widget');
    const toggle = document.querySelector('.chat-toggle');
    const closeButton = document.querySelector('.chat-close');
    const form = document.querySelector('.chat-form');
    const input = document.querySelector('.chat-input');
    const messages = document.querySelector('.chat-messages');

    const appendMessage = (text, type) => {
        const message = document.createElement('div');
        message.className = `chat-message ${type}`;
        message.textContent = text;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    };

    toggle.addEventListener('click', () => {
        widget.classList.toggle('closed');
        if (!widget.classList.contains('closed')) {
            input.focus();
        }
    });

    closeButton.addEventListener('click', () => {
        widget.classList.add('closed');
    });

    form.addEventListener('submit', async event => {
        event.preventDefault();
        const value = input.value.trim();
        if (!value) return;

        appendMessage(value, 'user');
        input.value = '';
        appendMessage('Thinking...', 'bot');

        try {
            const response = await fetch('/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt: value })
            });

            const data = await response.json();
            const lastBotMessage = messages.querySelector('.chat-message.bot:last-child');
            if (lastBotMessage) {
                lastBotMessage.textContent = data.text || 'No response received.';
            } else {
                appendMessage(data.text || 'No response received.', 'bot');
            }
        } catch (error) {
            appendMessage('Sorry, something went wrong. Please try again later.', 'bot');
            console.error('Chat error:', error);
        }
    });
});
