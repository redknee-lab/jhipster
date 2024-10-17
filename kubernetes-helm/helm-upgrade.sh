#!/bin/bash
# Files are ordered in proper order with needed wait for the dependent custom resource definitions to get initialized.
# Usage: bash helm-apply.sh
cs=csvc
suffix=helm
if [ -d "${cs}-${suffix}" ]; then
helm dep up ./${cs}-${suffix}
helm upgrade --install ${cs} ./${cs}-${suffix} --namespace jhipster
fi
helm dep up ./jhipsterapp-${suffix}
helm upgrade --install jhipsterapp ./jhipsterapp-${suffix} --namespace jhipster


