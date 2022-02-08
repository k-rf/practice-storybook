FROM node:16-bullseye

ARG USER
ARG WORKSPACES
ARG HOME

SHELL [ "/bin/sh", "-c" ]

RUN userdel -r node && useradd -m ${USER} -u 1000 -s /bin/bash

RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && mkdir -p /commandhistory ${HOME}/.vscode-server/extensions ${WORKSPACES}/node_modules \
    && touch /commandhistory/.bash_history \
    && chown -R ${USER}:${USER} /commandhistory ${HOME}/.vscode-server ${WORKSPACES}/node_modules \
    && echo $SNIPPET >> "${HOME}/.bashrc"

RUN sh -c "$(curl -fsSL https://starship.rs/install.sh)" -- --yes \
    && echo 'eval "$(starship init bash)"' >> ${HOME}/.bashrc

ENV PATH=$PATH:${HOME}/.yarn/bin
