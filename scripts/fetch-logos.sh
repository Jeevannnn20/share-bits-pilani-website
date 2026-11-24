#!/bin/sh
# Fetches company marks (128px favicons) into public/logos. Re-run to refresh.
cd "$(dirname "$0")/../public/logos" || exit 1
while read -r key domain; do
  [ -z "$key" ] && continue
  curl -sfL "https://www.google.com/s2/favicons?domain=${domain}&sz=128" -o "${key}.png" || echo "fail $key"
done <<LIST
harvard hbs.edu
ifs ifs.nic.in
iqvia iqvia.com
jpmorgan jpmorgan.com
elevation elevationcapital.com
sprinklr sprinklr.com
bcg bcg.com
goldman goldmansachs.com
synergy synergyconsultinginc.com
morganstanley morganstanley.com
citi citi.com
magi magi.ai
iimb iimb.ac.in
headout headout.com
incred incred.com
ubs ubs.com
ef joinef.com
axtria axtria.com
tatacomm tatacommunications.com
msci msci.com
amex americanexpress.com
dodge dodge.ai
arb arbtradinggroup.com
skydo skydo.com
ti ti.com
shopos shopos.ai
appsforbharat appsforbharat.com
pg pg.com
swissre swissre.com
eternal eternal.com
apple apple.com
paperboat paperboat.com
godrej godrejcapital.com
slb slb.com
google google.com
siemensenergy siemens-energy.com
nomura nomura.com
investec investec.com
peakxv peakxv.com
mckinsey mckinsey.com
ibm ibm.com
copenhagen ku.dk
sarvam sarvam.ai
skan skan.ai
myntra myntra.com
bits bits-pilani.ac.in
LIST
