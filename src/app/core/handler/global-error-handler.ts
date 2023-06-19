import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { ErrorService } from "../services/error.service";
import { HttpErrorResponse } from "@angular/common/http";
import { LoggingService } from "../services/logging.service";
import { NotificationService } from "../services/notification.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: Error | HttpErrorResponse) {
    const errorService = this.injector.get(ErrorService);
    const logger = this.injector.get(LoggingService);
    const notifier = this.injector.get(NotificationService);

    let message;
    if(error instanceof HttpErrorResponse){
      // Server Error
      message = errorService.getServerErrorMessage(error);
      notifier.showError(message, error.status.toString());
    }else{
      // Client Error
      message = errorService.getClientErrorMessage(error);
      notifier.showError(message, 'Client Error');
    }

    logger.logError(message);
    console.error(error);
  }
}