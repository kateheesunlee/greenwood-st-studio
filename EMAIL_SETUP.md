# Email Service Setup Instructions - Resend

## Environment Variables Required

Create a `.env.local` file in your project root with the following variable:

```
RESEND_API_KEY=your-resend-api-key
```

## Resend Setup (Recommended)

1. **Sign up for Resend**: Go to [resend.com](https://resend.com) and create an account
2. **Get API Key**:
   - Go to your Resend dashboard
   - Navigate to API Keys section
   - Create a new API key
   - Copy the key and add it to your `.env.local` file

3. **Domain Verification** (Optional but recommended):
   - Add your domain to Resend
   - Verify domain ownership
   - Update the `from` field in the API route to use your verified domain

## Quick Start with Resend

### Free Tier Benefits
- 3,000 emails per month
- 100 emails per day
- No credit card required
- Excellent deliverability

### Domain Setup (Optional)
If you want to use your own domain instead of Resend's default:

1. Add your domain in Resend dashboard
2. Add the required DNS records
3. Update the `from` field in `/src/app/api/send-email/route.ts`:
   ```javascript
   from: "Greenwood Street Studio <noreply@yourdomain.com>"
   ```

## Alternative: Using Resend's Default Domain

If you don't want to verify a domain, you can use Resend's default domain:

```javascript
from: "Greenwood Street Studio <onboarding@resend.dev>"
```

## Security Notes

- Never commit `.env.local` to version control
- Keep your Resend API key secure
- Use environment variables for all sensitive data
- Consider using different API keys for development and production
